export const highlightWords = (text: string, wordsToHighlight: string[]) => {
  if (!wordsToHighlight || wordsToHighlight.length === 0) return text;

  const regex = new RegExp(`(${wordsToHighlight.join('|')})`, 'gi');
  const parts = text.split(regex);

  return (
    <>
      {parts.map((part, index) => (
        wordsToHighlight.includes(part.toLowerCase()) ? <b key={index}>{part}</b> : part
      ))}
    </>
  );
};