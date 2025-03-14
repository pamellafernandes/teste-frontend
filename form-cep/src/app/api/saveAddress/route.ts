import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function POST(request: NextRequest) {
  const addressData = await request.json();
  console.log("Dados recebidos:", addressData);

  try {
    const filePath = path.join(process.cwd(), 'src', 'data', 'addresses.json');
    const fileExists = fs.existsSync(filePath);

    let addresses = [];
    if (fileExists) {
      const fileData = fs.readFileSync(filePath, 'utf-8');
      addresses = JSON.parse(fileData);
    }

    addresses.push(addressData);

    fs.writeFileSync(filePath, JSON.stringify(addresses, null, 2), 'utf-8');

    return NextResponse.json({ message: 'Dados salvos com sucesso!' }, { status: 200 });
  } catch (error) {
    console.error("Erro ao salvar dados no servidor:", error);
    return NextResponse.json({ error: 'Erro ao salvar dados.' }, { status: 500 });
  }
}
