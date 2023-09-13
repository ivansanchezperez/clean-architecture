import { ContainerBuilder } from 'diod';
import { HttpAxios } from './http/httpAxios';
import { Http } from './http/http';
import { ListMailBoxesBase } from '../../dashboard/domain/contract/ListMailBoxesBase';
import { ListMailBoxesRepository } from '../../dashboard/infrastructure/repositories/ListMailBoxesRepository';
import { ListMailBoxesUseCase } from '../../dashboard/application/ListMailBoxesUseCase';
import { TelemetryService } from './telemetry/telemetry-service';
import { I18nConfigGenerator } from './i18n/i18n-config-generator';

import { MailBoxMapper } from '../../dashboard/application/ListMailBoxesMapper';

const builder = new ContainerBuilder();
builder.register(Http).use(HttpAxios).withDependencies([TelemetryService]);
builder.register(ListMailBoxesBase).use(ListMailBoxesRepository).withDependencies([Http]);
builder.registerAndUse(ListMailBoxesUseCase).withDependencies([ListMailBoxesBase]);

builder.registerAndUse(MailBoxMapper);
builder.registerAndUse(TelemetryService);
builder.registerAndUse(I18nConfigGenerator);

export const diod = builder.build();
