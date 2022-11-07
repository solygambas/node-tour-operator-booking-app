import { describe, it, expect, vi } from "vitest";

import { generateReportData } from "./data";

describe("generateReportData()", () => {
  it("should execute login if provided", () => {
    const logger = vi.fn();
    // logger.mockImplementationOnce(() => {})
    generateReportData(logger);
    expect(logger).toBeCalled();
    // expect(logger).toBeCalledTimes(1);
    // expect(logger).toBeCalledWith();
  });
});
