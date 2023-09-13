import { diod } from '../diod.config';

export interface Class<T> extends Function {
	prototype: T;
}

export const inject = <T>(service: Class<T>): T => {
	return diod.get(service);
};
