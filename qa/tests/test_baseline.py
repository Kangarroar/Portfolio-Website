import os
from typing import Final


def test_base_load(driver, request):
    screenshots_dir: Final[str] = os.path.join("qa", "screenshots")
    abs_screenshots_dir: Final[str] = os.path.abspath(screenshots_dir)
    os.makedirs(abs_screenshots_dir, exist_ok=True)
    screenshot_path: Final[str] = os.path.join(abs_screenshots_dir, "baseline_home.png")
    driver.save_screenshot(screenshot_path)
    request.node.baseline_screenshot = screenshot_path


