#!/usr/bin/env node
import { exec } from 'child_process';
import dotenv from 'dotenv';
dotenv.config();

function deploy() {
  const { PROJECT_DEPLOY_PROVIDER: provider, PROJECT_DEPLOY_TOKEN: token } = process.env;
  if (provider === 'none') {
    return;
  }
  if (provider === 'vercel') {
    if (token === '') {
      throw new Error('No Vercel token set');
    }

    const vercelCmds = exec(`vercel --token ${token} --confirm`);
    vercelCmds.stdout.on('data', data => {
      console.log(data.toString());
    });
    vercelCmds.stderr.on('data', data => {
      console.error(data.toString());
    });
  }
}

deploy();
