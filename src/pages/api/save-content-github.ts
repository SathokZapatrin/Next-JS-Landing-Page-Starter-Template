import { Octokit } from '@octokit/rest';
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Метод не поддерживается' });
  }

  const { page, data } = req.body;

  if (!page || !data) {
    return res.status(400).json({ error: 'Отсутствует page или data' });
  }

  const octokit = new Octokit({ auth: process.env.GITHUB_TOKEN });

  const owner = 'SathokZapatrin';
  const repo = 'Next-JS-Landing-Page-Starter-Template';
  const path = `content/${page}.json`;
  const branch = 'master';

  try {
    let sha: string | undefined;
    try {
      const { data: fileData } = await octokit.repos.getContent({
        owner,
        repo,
        path,
        ref: branch,
      });

      if (!Array.isArray(fileData) && fileData.sha) {
        sha = fileData.sha;
      }
    } catch {
      sha = undefined;
    }

    await octokit.repos.createOrUpdateFileContents({
      owner,
      repo,
      path,
      message: `Update ${page}.json via admin panel`,
      content: Buffer.from(JSON.stringify(data, null, 2)).toString('base64'),
      branch,
      sha,
    });

    return res.status(200).json({ success: true });
  } catch (err: any) {
    return res.status(500).json({
      error: 'Ошибка при коммите',
      details: err.message,
    });
  }
}
