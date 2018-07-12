import {GenericPackage} from '../models/packages/generic.package';

export class MockingLoadPackaged {
  public getSimpleListOfPackages(): GenericPackage[] {
    let genericPackages = new Array() as Array<GenericPackage>;

    let genericPackage = new GenericPackage();

    var i;
    for (i = 0; i < 10; i++) {
      genericPackage = new GenericPackage();
      genericPackage.Name = 'Name ' + i;
      genericPackage.Version = 'Version: ' + i;
      genericPackage.Info = 'Test' + i;
      genericPackages.push(genericPackage);
    }
    return genericPackages;
  }
}
