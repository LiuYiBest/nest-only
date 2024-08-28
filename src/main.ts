import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as session from 'express-session';
// import { createApp } from 'vue';
// import ElementPlus from 'element-plus';
// import 'element-plus/dist/index.css';
// import App from './App.vue';
// import router from './router';

// const app = createApp(App);
// app.use(router);
// app.use(ElementPlus);

// app.mount('#app');

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.use(
    session({
      secret: 'key',
      rolling: true,
      name: 'nest.sid',
      cookie: {
        maxAge: 60 * 60 * 1000 * 24 * 30, // 30 days
        httpOnly: true,
        secure: false,
      },
    }),
  );
  await app.listen(3000);
}
bootstrap();
