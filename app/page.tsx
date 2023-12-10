"use client";

import {
  Box,
  Button,
  Grid,
  IconButton,
  Paper,
  Stack,
  Typography,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import Image from "next/image";

const services = [
  {
    id: 1,
    iconUrl: "/3.png",
    title: "Консультации",
    text: "Терапевтические / Ортопедические консультации,осмотр",
  },
  {
    id: 2,
    iconUrl: "/4.png",
    title: "Протезирование",
    text: "Изготовление ортопедической конструкции в ротовой полости при частичной или полной потере зубов",
  },
  {
    id: 3,
    iconUrl: "/5.png",
    title: "Рентгенография зубов",
    text: "Метод исследования, который помогает стоматологу правильно диагностировать проблемы полости рта",
  },
  {
    id: 4,
    iconUrl: "/6.png",
    title: "Пломбирование / Распломбирование",
    text: "Способ восстановить форму и функцию разрушенного кариесом зуба",
  },
  {
    id: 5,
    iconUrl: "/7.png",
    title: "Профессиональная чистка зубов",
    text: "Комплексная процедура удаления мягких и твердых зубных отложений, избавится от которых самостоятельно невозможно",
  },
];

const Page = () => {
  const { palette } = useTheme();
  const matches = useMediaQuery("(max-width:792px)");
  const matches2 = useMediaQuery("(max-width:1000px)");

  return (
    <Box>
      <Box
        sx={{
          px: matches ? 2 : 15,
          py: 2,
          bgcolor: palette.primary.main,
          minHeight: "100vh",
          position: "relative",
        }}
      >
        <Stack mb={matches ? 10 : 30}>
          <Stack
            direction={"row"}
            justifyContent="space-between"
            alignItems={"center"}
            mb={2}
          >
            <Image src={"/logo.png"} width={100} height={77} alt={"Логотип"} />
            <Stack alignItems={"end"}>
              <Stack>
                {!matches && (
                  <>
                    <Typography fontSize={24} textAlign="end">
                      Работаем с 9:00 до 14:00
                    </Typography>
                    <Typography fontSize={24} mb={2}>
                      выходныe: суббота, воскресенье.
                    </Typography>
                  </>
                )}
              </Stack>
              <Button
                sx={{
                  fontWeight: 600,
                  maxWidth: 300,
                  fontSize: 18,
                }}
                variant="contained"
                color="secondary"
                component="a"
                href="tel:88636220011"
              >
                8-(8636)-22-00-11
              </Button>
            </Stack>
          </Stack>
          {matches && (
            <Typography fontSize={24} mb={2} textAlign={"center"}>
              Работаем с 9:00 до 14:00, выходныe: суббота, воскресенье.
            </Typography>
          )}
        </Stack>
        <Stack
          sx={{
            zIndex: 2,
            position: "relative",
          }}
        >
          <Typography
            variant="h2"
            fontWeight={600}
            mb={3}
            textAlign={matches ? "center" : "left"}
          >
            ООО "Добрый Доктор"
          </Typography>
          <Typography
            variant="h4"
            maxWidth={900}
            mb={2}
            fontWeight={600}
            textAlign={matches ? "center" : "left"}
          >
            Наши клиенты - наш приоритет, мы предлагаем качественные
            стоматологические услуги
          </Typography>
          <Typography fontWeight={600} textAlign={matches ? "center" : "left"}>
            Записаться на приём можно по телефону:
          </Typography>
          <Typography fontWeight={600} textAlign={matches ? "center" : "left"}>
            8-(8636)-22-00-11
          </Typography>
        </Stack>
        <Image
          style={{
            position: "absolute",
            bottom: matches ? "50%" : 0,
            right: matches ? "50%" : 50,
            zIndex: 1,
            transform: matches ? "translate(50%,100%)" : "none",
          }}
          src={"/1.svg"}
          width={matches ? 400 : 700}
          height={matches ? 300 : 600}
          alt={""}
        />
        {/* <Image
          style={{ position: "absolute", bottom: 0, right: 50 }}
          src={"/2.svg"}
          width={700}
          height={600}
          alt={""}
        /> */}
      </Box>
      <Box
        sx={{
          px: matches ? 2 : 15,
          py: 3,
          bgcolor: "#fff",
          minHeight: "100vh",
          position: "relative",
        }}
      >
        <Typography variant="h2" fontWeight={600} mb={3} textAlign="center">
          Наши услуги
        </Typography>
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          {services.map((item) => (
            <Grid key={item.id} item sm={8} md={4}>
              <Paper
                elevation={10}
                sx={{
                  p: 5,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  height: "100%",
                }}
              >
                <IconButton
                  sx={{
                    bgcolor: palette.primary.main,
                    cursor: "default",
                  }}
                >
                  <Image
                    style={{
                      marginBottom: 5,
                    }}
                    src={item.iconUrl}
                    width={55}
                    height={50}
                    alt={""}
                  />
                </IconButton>
                <Typography mb={1} fontWeight={600} textAlign={"center"}>
                  {item.title}
                </Typography>
                <Typography textAlign={"center"}>{item.text}</Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Box>
      <Box
        sx={{
          px: matches ? 2 : 15,
          pt: 2,
          bgcolor: palette.primary.main,
          minHeight: "100vh",
          position: "relative",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              minWidth: matches ? "365px" : "760px",
              height: "800px",
              overflow: "hidden",
              position: "relative",
            }}
          >
            <iframe
              style={{
                width: "100%",
                height: "100%",
                border: "1px solid #e6e6e6",
                borderRadius: "8px",
                boxSizing: "border-box",
              }}
              src="https://yandex.ru/maps-reviews-widget/214643199392?comments"
            ></iframe>
            <a
              href="https://yandex.ru/maps/org/dobry_doktor/214643199392/"
              target="_blank"
              style={{
                boxSizing: "border-box",
                textDecoration: "none",
                color: "#b3b3b3",
                fontSize: "10px",
                fontFamily: "YS Text,sans-serif",
                padding: "0 20px",
                position: "absolute",
                bottom: "8px",
                width: "100%",
                textAlign: "center",
                left: "0",
              }}
            >
              Добрый Доктор на карте Шахт — Яндекс Карты
            </a>
          </div>
        </Box>
      </Box>
      <Box
        sx={{
          px: matches ? 2 : 15,
          bgcolor: palette.primary.main,
          pb: 2,
        }}
      >
        <Stack
          direction={matches ? "column-reverse" : "row"}
          alignItems="center"
          justifyContent={"space-between"}
        >
          {!matches2 && (
            <Image src={"/logo.png"} width={100} height={77} alt={"Логотип"} />
          )}
          <Typography
            fontWeight="600"
            maxWidth={420}
            textAlign={matches ? "center" : "left"}
          >
            Стоматологическая клиника ООО "Добрый Доктор" Ростовская
            обл.,Г.Шахты,пер.Кирова 74.
          </Typography>
          <Stack my={matches ? 2 : 0}>
            <Button
              sx={{
                fontWeight: 600,
                maxWidth: 300,
                fontSize: 18,
                mb: 2,
                whiteSpace: "nowrap",
              }}
              variant="contained"
              color="secondary"
              component="a"
              href="tel:88636220011"
            >
              8-(8636)-22-00-11
            </Button>
            <Button
              sx={{
                fontWeight: 600,
                maxWidth: 300,
                fontSize: 18,
                whiteSpace: "nowrap",
              }}
              variant="contained"
              color="secondary"
              component="a"
              href="tel:89185515277"
            >
              8-(918)-551-52-77
            </Button>
          </Stack>
        </Stack>
      </Box>
    </Box>
  );
};

export default Page;
