import prisma from "@/lib/prisma";

const shutdownSignals = ["SIGINT", "SIGTERM", "SIGQUIT"];

/**
 * 监听进程退出信号 关闭数据库连接
 */
shutdownSignals.forEach((signal) => {
  process.on(signal, async () => {
    console.log(`Received ${signal}, shutting down gracefully...`);
    await prisma.$disconnect();
    process.exit(0);
  });
});
