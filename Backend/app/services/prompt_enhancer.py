async def enhance_prompt(
    title: str,
    product: str,
    persona: str,
    description: str,
):
    """
    Temporary implementation.
    This will later call the Gemini API.
    """

    return (
        f"Create a {persona.lower()} marketing campaign for "
        f"{product}. "
        f"Campaign title: {title}. "
        f"Description: {description}"
    )