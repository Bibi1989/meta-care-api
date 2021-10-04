#!/bin/bash

yarn
npx sequelize db:migrate
yarn watch