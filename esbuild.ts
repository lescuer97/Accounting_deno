import * as esbuild from "https://deno.land/x/esbuild@v0.15.10/mod.js";

// const ts = "let test: boolean = true";
const result = await esbuild.build({
  entryPoints: [
    "./src/js/app.js",
    "./src/css/index.css",
    "./src/manifest.json",
  ],
  bundle: true,
  minify: false,
  sourcemap: true,
  target: ["chrome58", "firefox57", "safari11", "edge16"],
  outdir: "public",
  loader: { ".json": "copy", ".ts": "ts", ".jpg": "file" },
  allowOverwrite: true,
  //   outfile: "out.js",
});
// const result = await esbuild.transform(ts, { loader: "ts" });
console.log("result:", result);
esbuild.stop();
