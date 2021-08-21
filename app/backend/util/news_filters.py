
def clean(titles):
    filter_words = ["REFILE-UPDATE 1-", "REFILE-UPDATE 2-", "REFILE-UPDATE 3-",
                    "REFILE-UPDATE 4-", "REFILE-UPDATE 5-", "UPDATE 1-", "UPDATE 2-",
                    "UPDATE 3-", "UPDATE 4-", "UPDATE 5-", "Exclusive-", "US STOCKS-",
                    "COVID SCIENCE", "TREASURIES-", "EMERGING MARKETS-", "GLOBAL MARKETS",
                    "FOREX-", "RPT-", "Olympics-",
                    ]

    titles_cleaned = []
    for title in titles:
        for fw in filter_words:
            if fw in title.text:
                title_cleaned = str(title.text).replace(fw, "")
                if len(title_cleaned) >= 69:
                    title_cleaned = title_cleaned[:69] + '...'
                titles_cleaned.append(title_cleaned)
                break

            else:
                if len(title.text) >= 69:
                    title_cleaned = title.text[:69] + '...'
                    titles_cleaned.append(title_cleaned)
                    break
                else:
                    titles_cleaned.append(title.text)
                    break

    return titles_cleaned
