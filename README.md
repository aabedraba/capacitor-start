# capacitor-start
Playing around with capacitor

# Run in dev mode

Use `npm run dev` to run nextjs' dev server 

Open the app in iOS with `npx cap open ios` and run the emulator

It should have loaded a webview to your dev server and allows you to hot-reload

# Deploy

Build nextjs with `npm run build`

Update the ios app build with `npx cap sync` in case native dependencies are changed or otherwise `npx cap copy`for fast build sync
