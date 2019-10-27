FROM node as build-stage
WORKDIR /app
COPY package*.json ./
RUN npm install 
COPY . .
ARG PROJECTENV="development"
ENV PROJECTENV=${PROJECTENV}
RUN npm run build 

FROM nginx:stable-alpine as production-stage
COPY --from=build-stage /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]