import { mergeApplicationConfig, ApplicationConfig } from '@angular/core';
import { provideServerRendering } from '@angular/platform-server';
import { appConfig } from './app.config';
import { HttpClientModule, provideHttpClient } from '@angular/common/http';
import { JwtModule } from '@auth0/angular-jwt';

const serverConfig: ApplicationConfig = {
  providers: [
    provideServerRendering(),
    provideHttpClient(),]
};

export const config = mergeApplicationConfig(appConfig, serverConfig);
