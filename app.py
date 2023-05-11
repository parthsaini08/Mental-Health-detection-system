from re import split
from flask import Flask,render_template,request 
from flask_bootstrap import Bootstrap
import test
import videoTester
import speech_recognition as sr
import voiceAnalyzer
import time
import numpy as np
import soundfile as sf
import os
import wave
app = Flask(__name__)
app.config['SEND_FILE_MAX_AGE_DEFAULT'] = 0

Bootstrap(app)
@app.route('/')
def index():
    return render_template("index.html")

@app.route('/home')
def inde():
    print("HOME")
    return render_template("index.html")

@app.route('/qstn')
def phq():
    return render_template("phq9.html",data="Anxiety and Depression Detection")

@app.route('/expression') 
def expression():
    print("insider")
    p=videoTester.exp()
    return render_template("face.html",data=p)


@app.route('/face') 
def face():
    return render_template("face.html",data = "Anxiety and Depression Detection")

@app.route('/voice')
def voice():
    return render_template("voice.html",data = "Click on the Mic to Record")

@app.route('/tests')
def tests():
    return render_template("html/news.html")

@app.route('/question_anxiety')
def qa():
    return render_template("html/question_anxiety.html")

@app.route('/question_dep')
def qd():
    return render_template("html/question_dep.html")

@app.route('/question_soc')
def qs():
    return render_template("html/question_soc.html")

@app.route('/voice_recording')
def voice_recording():
    output_file = "output10.wav"
    duration = 4
    r = sr.Recognizer()
    with sr.Microphone() as source:
        print("Recording started...")
        audio = r.record(source, duration=duration)
    with open(output_file, "wb") as f:
        f.write(audio.get_wav_data())
    print(f"Recording saved to {output_file}")
    return render_template("voice.html", data = "Done recording.")


@app.route('/voice_analyzer', methods = ['GET', 'POST'])
def voice_analyzeer():
    res = voiceAnalyzer.alalyzer()
    res2 = os.system('python test.py -f output10.wav > output.txt')
    file =  open("output.txt","r")
    #gender = ["male","female"]
    for line in file:
        if "Result:" in line:
            sound = line.split()
            res2 = sound[1]
            
            
    
    return render_template("voice.html",data = res)


if __name__ == '__main__':
    app.run(debug=TRUE)
    
