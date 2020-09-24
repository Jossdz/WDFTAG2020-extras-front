import React from "react"
import { Button, Heading, Paragraph, Box } from "grommet"
import { useTranslation } from "react-i18next"

const Intl = () => {
  const { t, i18n } = useTranslation()

  const changeLang = lang => {
    i18n.changeLanguage(lang)
  }

  return (
    <>
      <Heading>{t("title")}</Heading>
      <Paragraph>{t("description.part1")}</Paragraph>
      <Paragraph>{t("description.part2")}</Paragraph>

      <Box pad='large' justify='between' direction='row'>
        <Button
          style={{ width: "150px" }}
          label='En'
          onClick={() => changeLang("en")}
        />

        <Button
          style={{ width: "150px" }}
          label='De'
          onClick={() => changeLang("de")}
        />

        <Button
          style={{ width: "150px" }}
          label='Fr'
          onClick={() => changeLang("fr")}
        />
      </Box>
    </>
  )
}

export default Intl
