const gulp = require('gulp');
const svgSprite = require('gulp-svg-sprite');
const rename = require('gulp-rename');
const del = require('del');
const svg2png = require('gulp-svg2png');

const config = {
    shape: {
        spacing: { // Add padding
            padding: 10
        }
    },
    mode: {
        css: {
            variables: {
                replaceSvgWithPng: () => {
                    return (sprite, render) => {
                        return render(sprite).split('.svg').join('.png');
                    }
                }
            },
            sprite: 'sprite.svg',
            render: {
                css: {
                    template: './gulp/templates/sprite.css'
                }
            }
        }
    }
};

// Delete previous sprites to stay organised
gulp.task('beginClean', () => {
    return del(['./app/temp/sprite', './app/assets/images/sprites'])
});

// Create temp folder for sprites
gulp.task('createSprite', ['beginClean'], () => {
    return gulp.src('./app/assets/images/icons/**/*.svg')
        .pipe(svgSprite(config))
        .pipe(gulp.dest('./app/temp/sprite/'));
});

gulp.task('createPngCopy', ['createSprite'], () => {
    return gulp.src('./app/temp/sprite/css/*.svg')
        .pipe(svg2png())
        .pipe(gulp.dest('./app/temp/sprite/css'))
});

// Take temp folder svg's and add them to ./app/assets/images/sprites
gulp.task('copySpriteGraphic', ['createPngCopy'],() => {
    return gulp.src('./app/temp/sprite/css/**/*.{svg,png}')
        .pipe(gulp.dest('./app/assets/images/sprites'))
});

// Take temp folder css files and add them to _sprite.css
gulp.task('copySpriteCSS', ['createSprite'], () => {
    return gulp.src('./app/temp/sprite/css/*.css')
        .pipe(rename('_sprite.css'))
        .pipe(gulp.dest('./app/assets/styles/modules'))
});

// Delete temp folder
gulp.task('endClean', ['copySpriteGraphic', 'copySpriteCSS'], () => {
    return del('./app/temp/sprite');
});

gulp.task('icons', ['beginClean', 'createSprite', 'createPngCopy', 'copySpriteGraphic', 'copySpriteCSS', 'endClean']);