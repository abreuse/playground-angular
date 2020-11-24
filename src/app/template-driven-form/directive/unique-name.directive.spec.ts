import {NameService, UniqueNameDirective} from './unique-name.directive';

describe('UniqueNameDirective', () => {
  it('should create an instance', () => {
    const directive = new UniqueNameDirective(new NameService());
    expect(directive).toBeTruthy();
  });
});
