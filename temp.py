import sounddevice as sd
import numpy as np
import scipy.io.wavfile as wav
import pyaudio
import wave

# Get the available audio devices
p = pyaudio.PyAudio()
device_count = p.get_device_count()
for i in range(device_count):
    device_info = p.get_device_info_by_index(i)
    print(f"Device {i}: {device_info['name']}")

# Select the desired input device index
input_device_index = 1  # Replace with the index of your desired microphone

# Rest of the code for recording and saving the audio
# ...

duration = 5  # Recording duration in seconds
sample_rate = 44100  # Desired sample rate
output_filename = "output.wav"

print("Recording started...")

# Start recording
recording = sd.rec(int(duration * sample_rate), samplerate=sample_rate, channels=1)

# Wait for recording to complete
sd.wait()

print("Recording finished.")

# Save the recording as a WAV file
wav.write(output_filename, sample_rate, np.squeeze(recording))

print(f"Audio saved as {output_filename}.")
