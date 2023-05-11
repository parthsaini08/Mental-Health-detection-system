FROM python:<PYTHON_VERSION>-slim-buster

RUN apt update && apt install -y portaudio19-dev

RUN pip install pyaudio

CMD [ "python", "app.py" ]
