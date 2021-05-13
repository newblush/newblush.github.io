---
title: 在Unity中创建NURBS曲面
date: 2021-05-12 18:08:24
tag: 计算机图形学
katex: true
---

# NURBS曲面

## NURBS简介

NURBS(**Non-uniform rational basis spline**)，即非均匀有理基样条，是计算机图形学中常用的表示曲线和曲面的B样条(B-Spline)的数学模型。它为处理解析(由通用数学公式定义)和模型形状提供了极大的灵活性和精度，是一种曲线建模。NURBS曲线通常用于计算机辅助设计(CAD)，制造(CAM)和工程(CAE)。它们是众多行业标准的一部分，如IGES、STEP、ACIS和PHIGS。创建和编辑NURBS曲面的工具可以在各种3D图形和动画软件包中找到。



它们可以被计算机程序有效地处理，但也可以进行简单的人机交互。NURBS曲面是三维空间中两个参数映射到曲面的函数。曲面的形状是由控制点决定的。在紧凑的形式下，NURBS曲面可以表示简单的几何形状。对于复杂的有机形状，T样条曲线和细分曲面更适合，因为它们比NURBS曲面的控制点数量减半。



一般来说，编辑NURBS曲线和曲面是直观和可预测的。控制点总是直接连接到曲线或表面上，或者像用橡皮筋连接一样。根据用户界面的类型，NURBS曲线和曲面的编辑可以通过它们的控制点（类似于Bézier曲线）或通过更高级别的工具，如样条建模和分层编辑。

## NURBS的数学推导

Aha! $E = mc^{2}$.
$$
\left(\beta m c^2 + c \left(\sum_{n=1}^3\alpha_n p_n\right)\right) \psi(x,t)
= i\hbar \frac{\partial \psi(x,t)}{\partial t}
$$

