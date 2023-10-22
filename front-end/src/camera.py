from time import time
import cv2

# Create a new VideoCapture object
cam = cv2.VideoCapture(0)

# Initialise variables to store current time difference as well as previous time call value
previous = time()
delta = 0

# Keep looping
while True:
    # Get the current time, increase delta and update the previous variable
    current = time()
    delta += current - previous
    previous = current

    # Check if 3 (or some other value) seconds passed
    if delta > 3:
        # Operations on image
        # Reset the time counter
        delta = 0

    # Show the image and keep streaming
    _, img = cam.read()
    cv2.imshow("Frame", img)
    cv2.waitKey(1)