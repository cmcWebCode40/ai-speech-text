export const generateHTML = (aiSummary: string, transcripts: string) => {
  return `
    <html>
      <body>
        <h2>AI summary</h2>
        <p>${aiSummary}</p>
        <hr/>
        <h2>Transcripts</h2>
        <p>${transcripts}</p>
      </body>
    </html>
  `;
};

export const getOpenAIPrompt = (transcripts: string) => {
  return `
  help generate a short  summary with not more than 50 words for this transcript :
  ${transcripts}
  `;
};
