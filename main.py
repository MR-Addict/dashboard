import uvicorn
from fastapi import FastAPI
from fastapi.staticfiles import StaticFiles

app = FastAPI()

app.mount("/", StaticFiles(directory="public", html=True), name="public")

if __name__ == '__main__':
    uvicorn.run("main:app", host="0.0.0.0", port=8087, reload=True)
