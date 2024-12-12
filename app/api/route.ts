export const GET = async () => {
  const welcomeMessage = `
    <h1>Hi there, welcome to Genesis Fund!</h1>
  `;
  
return new Response(welcomeMessage, { status: 200 });
};
