import { ConfigurationServiceFactory } from "./ConfigurationServiceFactory";
import { ConfigurationServiceImpl } from "./impl/ConfigurationServiceImpl";

describe("ConfigurationServiceFactory", () => {
  it("should create a ConfigurationService", () => {
    expect(
      ConfigurationServiceFactory.create({
        exists: jest.fn(),
        read: jest.fn(),
        write: jest.fn(),
        delete: jest.fn(),
        rename: jest.fn(),
      })
    ).toBeInstanceOf(ConfigurationServiceImpl);
  });
});
