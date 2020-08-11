<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
    <xsl:output method="html" encoding="utf-8" indent="yes"/>
    <xsl:template match="/">
        <html>
            <head><title>Question 7 - Nutrition information</title></head>
            <body>
		<h1><xsl:text> Nutrition Facts</xsl:text></h1>
                <h3><xsl:value-of select="product/@name"/></h3>
                <table>
                    <thead>
                        <tr>
                            <th>Amount per <xsl:value-of select="product/size"/></th>
                        </tr>
                    </thead>
                    <tr>
                        <td style="text-align: right"><b>Calories:</b></td>
                        <td><xsl:value-of select="product/calories/total"/></td>
                    </tr>
                    <tr>
                        <td style="text-align:right"><b>Fat Calories:</b></td>
                        <td><xsl:value-of select="product/calories/fat"/></td>
                    </tr>
                    <tr>
                        <td style="text-align: right"><b>Fat:</b></td>
                        <td><xsl:value-of select="product/fat/total"/></td>
                    </tr>
                    <tr>
                        <td style="text-align: right"><b>Saturated:</b></td>
                        <td><xsl:value-of select="product/fat/saturated"/></td>
                    </tr>
                    <tr>
                        <td style="text-align: right"><b>Cholesterol:</b></td>
                        <td><xsl:value-of select="product/cholesterol"/></td>
                    </tr>
                    <tr>
                        <td style="text-align: right"><b>Sodium:</b></td>
                        <td><xsl:value-of select="product/sodium"/></td>
                    </tr>
                    <tr>
                        <td style="text-align: right"><b>Carbohydrates:</b></td>
                        <td><xsl:value-of select="product/carbohydrates"/></td>
                    </tr>
                    <tr>
                        <td style="text-align: right"><b>Fiber:</b></td>
                        <td><xsl:value-of select="product/fiber"/></td>
                    </tr>
                    <tr>
                        <td style="text-align: right"><b>Sugars:</b></td>
                        <td><xsl:value-of select="product/sugars"/></td>
                    </tr>
                    <tr>
                        <td style="text-align: right"><b>Protein:</b></td>
                        <td><xsl:value-of select="product/protein"/></td>
                    </tr>
                </table>
            </body>
        </html>
    </xsl:template>
</xsl:stylesheet>