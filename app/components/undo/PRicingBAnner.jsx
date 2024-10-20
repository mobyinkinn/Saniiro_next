import { Stack, Typography } from "@mui/material";
import React from "react";
import NavLight from "../Navbar/NavLight";
import "../Solutions/IndustriesByusecases/Solution.css";
import TickMark from "../assets/TickMark.svg";
import Image from "next/image";

const PRicingBAnner = () => {
  const lists = [
    {
      title: "FREE TRIAL",
      description: "No credit card required",
    },
    {
      title: "Flexible contracts",
      description: "Straightforward pricing, no lock-ins",
    },
    {
      title: "Minimal learning curve",
      description: "50% faster implementation",
    },
    {
      title: "Intuitive UX",
      description: "Better adoption, easier training",
    },
  ];
  return (
    <Stack bgcolor={"#052973"} className="textured-background">
      <NavLight />
      <Stack gap={4} pb={10} width={"95%"} m={"0 auto"}>
        <Stack
          p={"50px 0px 0 0"}
          gap={2}
          alignItems={"center"}
          justifyContent={"center"}
        >
          <Typography
            textTransform={"uppercase"}
            fontSize={{
              xs: "30px",
              sm: "40px",
              md: "60px",
              lg: "70px",
              xl: "80px",
            }}
            letterSpacing={1}
            fontWeight={"bold"}
            color={"transparent"}
            lineHeight={1}
            className="text-stroke"
            textAlign={"center"}
          >
            Sensational software,
          </Typography>
          <Typography
            textTransform={"uppercase"}
            fontSize={{
              xs: "30px",
              sm: "40px",
              md: "60px",
              lg: "70px",
              xl: "80px",
            }}
            letterSpacing={1}
            fontWeight={"bold"}
            color={"white"}
            lineHeight={1}
            textAlign={"center"}
          >
            Sensible price
          </Typography>
        </Stack>
        <Stack
          pl={{
            xs: 6,
            sm: 12,
            smm: 0,
            md: 0,
          }}
          direction={{
            xs: "column",
            sm: "column",
            smm: "row",
            md: "row",
            lg: "row",
            xl: "row",
          }}
          flexWrap={"wrap"}
          justifyContent={{
            xs: "center",
          }}
          gap={{
            xs: 1,
            sm: 4,
            md: 6,
            lg: 8,
            xl: 10,
          }}
        >
          {lists.map((d) => (
            <Stack direction={"row"} gap={1}>
              <Stack pt={0.7}>
                <Image src={TickMark} alt="" />
              </Stack>
              <Stack>
                <Typography
                  fontSize={{
                    xs: "12px",
                    sm: "14px",
                    md: "16px",
                    lg: "20px",
                    xl: "22px",
                  }}
                  fontWeight={"bold"}
                  color={"white"}
                >
                  {d.title}
                </Typography>
                <Typography fontSize={"13px"} color={"grey"}>
                  {d.description}
                </Typography>
              </Stack>
            </Stack>
          ))}
        </Stack>
      </Stack>
    </Stack>
  );
};

export default PRicingBAnner;
