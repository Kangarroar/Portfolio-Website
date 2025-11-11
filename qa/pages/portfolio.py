from selenium.webdriver.common.by import By
from selenium.webdriver.remote.webdriver import WebDriver
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC


class PortfolioPage:
    def __init__(self, driver: WebDriver):
        self.driver = driver
        self.wait = WebDriverWait(driver, 10)

    # Locators
    YEMC_CARD = (By.CSS_SELECTOR, '[data-testid="project-card-yemc"]')
    LFC_CARD = (By.CSS_SELECTOR, '[data-testid="project-card-lfc"]')
    RESUME_DOWNLOAD = (By.CSS_SELECTOR, '[data-testid="resume-download-btn"]')
    RESUME_EMAIL = (By.CSS_SELECTOR, '[data-testid="resume-email-link"]')
    CONTACT_EMAIL = (By.CSS_SELECTOR, '[data-testid="contact-email-link"]')
    GITHUB_LINK = (By.CSS_SELECTOR, '[data-testid="contact-github-link"]')
    LINKEDIN_LINK = (By.CSS_SELECTOR, '[data-testid="contact-linkedin-link"]')

    NAV_PROJECTS = (By.CSS_SELECTOR, '[data-testid="nav-projects-link"]')
    NAV_RESUME = (By.CSS_SELECTOR, '[data-testid="nav-resume-link"]')
    NAV_CONTACT = (By.CSS_SELECTOR, '[data-testid="nav-contact-link"]')

    # Section anchors
    SECTION_PROJECTS = (By.CSS_SELECTOR, '#projects')
    SECTION_RESUME = (By.CSS_SELECTOR, '#resume')
    SECTION_CONTACT = (By.CSS_SELECTOR, '#contact')

    def wait_visible(self, locator):
        return self.wait.until(EC.visibility_of_element_located(locator))

    def get_scroll_y(self) -> int:
        return int(self.driver.execute_script("return Math.round(window.pageYOffset)"))

    def is_section_in_viewport(self, css_selector: str) -> bool:

        return bool(self.driver.execute_script(
            """const el = document.querySelector(arguments[0]);
               if (!el) return false;
               const rect = el.getBoundingClientRect();
               return rect.top >= -20 && rect.top <= 200;""",
            css_selector,
        ))

    def click_and_wait_scroll(self, nav_locator, target_selector: str):
        start_y = self.get_scroll_y()
        self.wait_visible(nav_locator).click()
        self.wait.until(lambda d: self.get_scroll_y() != start_y or self.is_section_in_viewport(target_selector))

    def _scroll_into_view_center(self, element):
        self.driver.execute_script(
            "arguments[0].scrollIntoView({block: 'center', inline: 'center'});", element
        )

    def _force_open_links_same_tab(self):
        # Same tab open
        self.driver.execute_script(
            "document.querySelectorAll('a[target=\"_blank\"]').forEach(a => a.target = '_self');"
        )

    def click_card_and_wait_url(self, card_locator, expected_url_prefix: str, timeout: int = 10):
        card = self.wait_visible(card_locator)
        self._scroll_into_view_center(card)
        self._force_open_links_same_tab()
        anchor = self.driver.execute_script("return arguments[0].querySelector('a') || arguments[0];", card)
        current = self.driver.current_url
        self.driver.execute_script("arguments[0].click();", anchor)
        self.wait.until(EC.url_changes(current))
        self.wait.until(EC.url_matches(expected_url_prefix))

