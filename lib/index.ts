interface UUIDSvgData {
  path: string;
  color: string;
  background: string;
}

export function generateFromUUID(id: string): UUIDSvgData {
  const idArr = id.split("").filter((el) => el !== "-");
  const backgroundColor = idArr.splice(0, 6).join("");
  const elColor = idArr.splice(idArr.length - 6, idArr.length).join("");
  const arr = [...Array(10)].map(() =>
    parseInt(idArr.splice(0, 2).join(""), 16)
  );

  return {
    path: `M 150 150 
    Q ${arr[0]} ${arr[1]} ${arr[2]} ${arr[3]}
    C ${arr[4]} ${arr[5]} ${arr[6]} ${arr[7]} ${arr[8]} ${arr[9]}
    Q ${255 - arr[0]} ${255 - arr[1]} ${255 - arr[2]} ${255 - arr[3]}
    C ${255 - arr[4]} ${255 - arr[5]} ${255 - arr[6]} ${255 - arr[7]} ${
      255 - arr[8]
    } ${255 - arr[9]}
    Z
  `,
    color: elColor,
    background: backgroundColor,
  };
}
