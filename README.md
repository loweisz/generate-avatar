![](logo.png)

Check out the example: https://generate-avatar.now.sh/

# Generate Avatar

Your lightweight avatar generator, which 100% fingerprinted on any input you want.

You can pass your email, uuid, username etc. as an input and it will generate everytime the same unique svg based avatar for you.
Which means you don't need to store any image in your database anymore.
It generates that image on the fly whereever you want based on the id, email and so on.

The best thing it's only 2kB (gzipped) big, so it can be basically used everywhere you want.

### Install

```
  npm i generate-avatar
```

### How it works

You pass in the string you want and it will return the svg in a string format:

```
  import { generateFromString } from 'generate-avatar'

  generateFromString("example@test.com")
```

This will generate the following svg image.

![](logo.png)

You can [try it out here](https://generate-avatar.now.sh/). Try to pass in `example@test.com` and you will see the exact same image.
