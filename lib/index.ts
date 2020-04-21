interface UUIDSvgData {
  paths: string[];
  colors: string[];
  background: string;
}

function invertHex(hex: string): string {
  return (Number(`0x1${hex}`) ^ 0xffffff).toString(16).substr(1).toUpperCase();
}

function generatePath(curveVal: number, posVal: number) {
  const cVal = curveVal;
  const bigC = 300 - cVal;

  const pos = posVal;
  return `m 150 ${pos + 150}
  Q ${bigC} ${cVal} ${pos + 150} 150 
  Q ${bigC} ${bigC} 150 ${150 - pos} 
  Q ${cVal} ${bigC} ${150 - pos} 150 
  Q ${cVal} ${cVal} 150 ${pos + 150} 
z 
`;
}

function hydrateSVGBlog(data: UUIDSvgData): Blob {
  const svgString = `
    <svg
      width="300"
      height="300"
      viewBox="0 0 300 300"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect id="bg" width="300" height="300" fill="#${data.background}" />
      <path d="${data.paths[0]}" fill="#${data.colors[0]}" />
      <path d="${data.paths[1]}" fill="#${data.colors[1]}" />
      <path d="${data.paths[2]}" fill="#${data.colors[2]}" />
    </svg>
  `;
  return new Blob([svgString], { type: "image/svg+xml" });
}

export function generateFromUUID(id: string): Blob {
  const idArr = id.split("").filter((el) => el !== "-");
  const backgroundColor = idArr.splice(0, 6).join("");
  const elColor = idArr.splice(idArr.length - 6, idArr.length).join("");
  const arr = [...Array(10)].map(() =>
    parseInt(idArr.splice(0, 2).join(""), 16)
  );
  const data = {
    paths: [
      generatePath(arr[0], arr[1]),
      generatePath(arr[2], arr[3]),
      generatePath(arr[4], arr[5]),
    ],
    colors: [elColor, invertHex(elColor), invertHex(backgroundColor)],
    background: backgroundColor,
  };
  return hydrateSVGBlog(data);
}
