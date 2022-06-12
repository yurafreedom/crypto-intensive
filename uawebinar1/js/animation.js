let animation = (item, duration, distance, origin, scale = 1, interval = 0, delay = 0, opacity = 0 ) => {
    ScrollReveal().reveal(item, {
        duration: duration,  // Время анимации (Миллисекунды)
        distance: distance,  // Дистанция (Растояние в px - 40px)
        origin: origin, // Направление (Top, bottom, left, right)
        scale: scale, // Трансформация (От 1 до 0)
        interval: interval, // Интервал появления (Миллисекунды)
        delay: delay, // Задержка перед выполнением (Миллисекунды)
        opacity: opacity, // Прозрачность (От 1 до 0)
    });
}

// animation('.logo', 900, '40px', 'top', 0.85); Пример использования
