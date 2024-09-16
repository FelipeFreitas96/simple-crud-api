export function CardMapper(card) {
  return {
    id: card._id.toString(),
    title: card.title,
    description: card.description,
  };
}
