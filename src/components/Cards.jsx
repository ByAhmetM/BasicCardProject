import { Card, Image, Text, CloseButton, Button, Group } from "@mantine/core";

function Cards({ title, par, res, index, click }) {
  return (
    <Card shadow="sm" padding="lg" radius="md" withBorder>
      <Card.Section>
        <Image src={res} height={160} alt="Araba" />
      </Card.Section>

      <Group position="apart" mt="md" mb="xs">
        <Text weight={500}>{title}</Text>
        <CloseButton onClick={click} aria-label="Close modal" />
      </Group>

      <Text size="sm" color="dimmed">
        {par}
      </Text>

      <Button variant="light" color="blue" fullWidth mt="md" radius="md">
        Book classic tour now
      </Button>
    </Card>
  );
}

export default Cards;
