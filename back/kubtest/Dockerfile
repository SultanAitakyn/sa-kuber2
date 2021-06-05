# pull the official base image
FROM python:3.8.3-alpine

# set work directory
WORKDIR /app/

# set environment variables
ENV PYTHONUNBUFFERED 1

# install dependencies
COPY requirements.txt requirements.txt
RUN python3 -m pip install -r requirements.txt --no-cache-dir

# copy project
COPY . .

EXPOSE 8000

CMD ["python3", "manage.py", "runserver", "0.0.0.0:8000"]
