FROM alpine:3.8 as jdk
ADD https://download.java.net/java/early_access/alpine/25/binaries/openjdk-11-ea+25_linux-x64-musl_bin.tar.gz /opt/
RUN tar zxf /opt/openjdk-11-ea+25_linux-x64-musl_bin.tar.gz -C /opt
RUN /opt/jdk-11/bin/jlink \
    --module-path /opt/jdk-11/jmods \
    --verbose \
    --add-modules java.base,java.logging,java.xml,jdk.unsupported \
    --compress 2 \
    --no-header-files \
    --output /opt/jdk-11-minimal

FROM maven:3-jdk-11-slim as build
COPY src /usr/src/vertx/src
COPY pom.xml /usr/src/vertx
RUN mvn --batch-mode --file /usr/src/vertx/pom.xml clean package

FROM alpine:3.8
COPY --from=jdk /opt/jdk-11-minimal /opt/jdk-11-minimal
COPY --from=build /usr/src/vertx/target/lib /opt/vertx/lib
COPY --from=build /usr/src/vertx/target/*.jar /opt/vertx
EXPOSE 8080/tcp
ENTRYPOINT ["/opt/jdk-11-minimal/bin/java", "-jar", "/opt/vertx/java-vertx-jlink-1.0-SNAPSHOT.jar"]
