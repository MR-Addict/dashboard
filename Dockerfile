FROM python:slim-buster
WORKDIR /usr/src/app
EXPOSE 8087
COPY . .
RUN pip install -r requirements.txt
CMD ["python", "main.py"]