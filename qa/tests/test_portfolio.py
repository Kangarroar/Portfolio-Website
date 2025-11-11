from qa.pages.portfolio import PortfolioPage

# Should I even have present tests?

def test_project_cards_present(driver):
    page = PortfolioPage(driver)
    page.wait_visible(page.YEMC_CARD)
    page.wait_visible(page.LFC_CARD)


def test_resume_download_and_email_present(driver):
    page = PortfolioPage(driver)
    page.wait_visible(page.RESUME_DOWNLOAD)
    page.wait_visible(page.RESUME_EMAIL)

def test_project_cards_redirects(driver):
    page = PortfolioPage(driver)
    page.click_card_and_wait_url(page.YEMC_CARD, "https://yemc.pages.dev")
    driver.back()
    page.click_card_and_wait_url(page.LFC_CARD, "https://github.com/Kangarroar/Legion-Fan-Controller")
    driver.back()

def test_contact_email_and_social_links(driver):
    page = PortfolioPage(driver)
    contact_email = page.wait_visible(page.CONTACT_EMAIL)
    assert "mailto:" in contact_email.get_attribute("href")
    github = page.wait_visible(page.GITHUB_LINK)
    linkedin = page.wait_visible(page.LINKEDIN_LINK)
    assert github.get_attribute("href")
    assert linkedin.get_attribute("href")


def test_nav_projects_scrolls(driver):
    page = PortfolioPage(driver)
    page.click_and_wait_scroll(page.NAV_PROJECTS, "#projects")
    assert page.is_section_in_viewport("#projects") or page.get_scroll_y() > 0


def test_nav_resume_scrolls(driver):
    page = PortfolioPage(driver)
    page.click_and_wait_scroll(page.NAV_RESUME, "#resume")
    assert page.is_section_in_viewport("#resume") or page.get_scroll_y() > 0


def test_nav_contact_scrolls(driver):
    page = PortfolioPage(driver)
    page.click_and_wait_scroll(page.NAV_CONTACT, "#contact")
    assert page.is_section_in_viewport("#contact") or page.get_scroll_y() > 0

