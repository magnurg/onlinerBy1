@smoke
Feature: Onliner showcase

        Scenario Outline: Clickcing "Барахолка" in onliner.by header

            Given I am on Onliner homepage
             When I click "Барахолка" in Onliner.by header
             Then I redirected to  "Барахолка" page

      
       

            Given I am on "Барахолка" page of onliner.by
             When I enter "Лопата" in Search field
             Then I ckick "Search" button
             Then I see "<ItemName>" item

        Examples:
                  | ItemName |
                  | Все      |
                  | Продам   |
                  | Куплю    |
                  | Обмен    |
                  | Услуга   |
                  | Аренда   |
                  | Закрыто  |



