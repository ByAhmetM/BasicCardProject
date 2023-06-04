import {
  Input,
  Textarea,
  Button,
  Stack,
  Text,
  Container,
  Grid,
} from "@mantine/core";
import { useState } from "react";
import Cards from "./components/Cards";

let arr = [
  {
    id: 1,
    title: "AUDİ",
    par: "Bu arabanın ismi Audi",
    res: "https://cdn1.ntv.com.tr/gorsel/-UbLpLawtEG71qP298GB3g.jpg?width=952&height=540&mode=both&scale=both",
  },
  {
    id: 2,
    title: "TOYOTA",
    par: "Bu arabanın ismi Toyota",
    res: "https://img.chip.com.tr/rcman/Cw1280h720q95gm/storage/files/images/2022/11/01/toyota-corolla-kasim-2022-fiyat-listesi-iste-son-durum-IPBe.jpg",
  },
  {
    id: 3,
    title: "BMW",
    par: "Bu arabanın ismi BMW",
    res: "https://www.bmw.com.tr/content/dam/bmw/common/all-models/m-series/m3-sedan/2023/highlights/bmw-3-series-cs-m-automobiles-sp-desktop.jpg",
  },
  {
    id: 4,
    title: "MERCEDES",
    par: "Bu arabanın ismi Mercedes",
    res: "https://pladmin.mercedes-benz.com.tr/cdn/images/a200flamg-(1).png",
  },
];

function App() {
  const [title, setTitle] = useState("");
  const [paragraf, setParagraf] = useState("");
  const [list, setList] = useState(arr);
  const [resim, setResim] = useState("");

  const click = () => {
    setTitle("");
    setParagraf("");
    setResim("");
    setList([...list, { id: 5, title, par: paragraf, res: resim }]);
  };

  const degistir = () => {
    if (title !== "" && paragraf !== "" && resim !== "") {
      click();
    } else {
      alert("Lütfen boşlukları doldurunuz");
    }
  };

  return (
    <Container>
      <Text fz="xl" fw={700} fs="italic">
        Kart Oluşturma Aracı
      </Text>
      <Stack spacing="sm">
        <Input.Wrapper label="Başlık">
          <Input
            placeholder="Başlık yazınız."
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
        </Input.Wrapper>
        <Input.Wrapper label="Resim URL Ekle">
          <Input
            placeholder="Resim urlsi giriniz."
            value={resim}
            onChange={(e) => {
              setResim(e.target.value);
            }}
          />
        </Input.Wrapper>
        <Textarea
          placeholder="Açıklama yazınız."
          label="Açıklama"
          value={paragraf}
          onChange={(e) => {
            setParagraf(e.target.value);
          }}
        />
        <Button variant="outline" onClick={degistir} color="red">
          Card Oluştur
        </Button>
      </Stack>
      <Text fz="lg" fs="italic">
        Kartlar:
      </Text>
      <Grid>
        {list.map(({ par, title, res }, i) => (
          <Grid.Col key={i} span={4}>
            <Cards
              par={par}
              title={title}
              res={res}
              index={i}
              click={() => {
                let copyList = [...list];
                copyList.splice(i, 1);
                setList(copyList);
              }}
            />
          </Grid.Col>
        ))}
      </Grid>
    </Container>
  );
}

export default App;
