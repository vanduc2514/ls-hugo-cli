# TODO replace with devcontainer

FROM timbru31/java-node

# RUN apt-get update && \
#     apt install -y openjdk-11-jdk
# TODO install babushka https://github.com/babashka/babashka#alpine
RUN curl -L https://github.com/babashka/babashka/releases/download/v1.1.173/babashka-1.1.173-linux-amd64.tar.gz | \
    tar -xz
RUN cp bb /usr/local/bin
RUN chmod +x /usr/local/bin/bb

WORKDIR /app
COPY . /app

RUN npm install
RUN chmod +x ./query.sh

CMD ["./query.sh"]