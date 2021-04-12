@smoke
Feature: Onliner showcases

              Examlple feature of UI automation

        Scenario: Clickcing "Барахолка" in onliner.by header
            Given I am on Onliner homepage
             When I click "Барахолка" in Onliner.by header
             Then I redirected to  "Барахолка" page

        Scenario: Search "Лопата" in onliner.by header
            Given I am on "Барахолка" page of onliner.by
             When I enter "Лопата" in Search field
             Then I click "Search" button
             Then I see following search result headers: "Все", "Продам", "Куплю", "Обмен", "Услуга", "Аренда", "Закрыто"

