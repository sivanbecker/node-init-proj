import app from "./app";

export async function run(): Promise<void> {
    console.log('starting service...');
    const webApp = await app;
    await webApp.start();
}
