import os
import pytest
from selenium import webdriver
from selenium.webdriver.chrome.options import Options
from pytest_html import extras


@pytest.fixture(scope="session")
def base_url() -> str:
    return os.getenv("PORTFOLIO_BASE_URL", "http://localhost:5173/")


@pytest.fixture(scope="session")
def driver() -> webdriver.Chrome:
    chrome_options = Options()
    # Run visible # bugs out if headless. fix later.
    if os.getenv("HEADLESS", "0") == "1":
        chrome_options.add_argument("--headless=new")
    chrome_options.add_argument("--window-size=1440,900")
    driver = webdriver.Chrome(options=chrome_options)
    driver.implicitly_wait(5)
    yield driver
    driver.quit()


@pytest.fixture(autouse=True)
def navigate_home(driver: webdriver.Chrome, base_url: str):
    driver.get(base_url)
    yield

@pytest.hookimpl(hookwrapper=True)
def pytest_runtest_makereport(item, call):
    outcome = yield
    report = outcome.get_result()
    extra = getattr(report, "extra", [])
    
    # Screenshot sanity check of page load.
    screenshot_path = getattr(item, "baseline_screenshot", None)
    if screenshot_path:
        extra.append(extras.image(screenshot_path))
    report.extras = extra

