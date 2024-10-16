import React from 'react';

type DetailedHTMLProps = React.DetailedHTMLProps<React.HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>;
interface TruncateProps extends DetailedHTMLProps {
    /**
     * The raw text content to be truncated, rich text supported
     */
    children: React.ReactNode;
    /**
     * Symbols for ellipsis parts
     *
     * @default '...'
     */
    ellipsis?: React.ReactNode;
    /**
     * Specifies how many lines of text should be preserved
     * until it gets truncated.
     *
     * 1. If not an safe integer, it will default to `0`
     * 2. If less than `0` , it will default to `0`
     * 3. If the value is `0` , it means not truncated
     *
     * @description Option conflict considerations:
     *  When the `middle` option is enabled, this option will always be `1`
     *
     * @since v0.4.0 add safe and positive integer check
     *
     * @default 1
     */
    lines?: number;
    /**
     * If `true` , whitespace will be removed from before the ellipsis
     * e.g. `words ...` will become `words...` instead
     *
     * @default false
     */
    trimWhitespace?: boolean;
    /**
     * Specify the width of the outer element,
     *
     * If specified, the calculation of the content
     * will be based on this number.
     *
     * If not specified, it will be obtained based on
     * the component's `parentElement.getBoundingClientRect().width`
     */
    width?: number;
    /**
     * The separator for word segmentation
     *
     * By default, text is assumed to use whitespace
     * as a word segmentation convention (e.g. English),
     *
     * However, it may not be suitable for all languages.
     * Different languages can specify other symbols
     * according to usage habits.
     *
     * For example, when it comes to Chinese content,
     * you can pass in an empty string to get better calculation results.
     *
     * @since v0.2.0
     *
     * @default ' '
     */
    separator?: string;
    /**
     * Whether to truncate in the middle
     *
     * @description Option conflict considerations:
     *  When this option is enabled, the `lines` option will always be `1`
     *
     * @since v0.3.0
     *
     * @default false
     */
    middle?: boolean;
    /**
     * Number of characters to keep from the end of the text
     *
     * Always rounded down via `Math.floor`,
     * and always treated as a position relative to the end,
     * regardless of positive or negative.
     *
     * But if the end position exceeds the text length,
     * the truncation position will be processed at the end.
     *
     * @todo The current `end` cannot support more than the number of
     *  characters that can be displayed on a single line, and this
     *  will be solved in subsequent versions.
     *
     * @description Option take effect considerations:
     *  This option will only take effect, when the `middle` option is enabled
     *
     * @since v0.3.0
     *
     * @default 5
     */
    end?: number;
    /**
     * Callback function when truncation behavior is triggered
     *
     * @param didTruncate - Whether truncation occurs
     */
    onTruncate?: (didTruncate: boolean) => void;
}

declare const Truncate: React.FC<TruncateProps>;

type MiddleTruncateProps = Omit<TruncateProps, 'middle' | 'lines' | 'width'>;

declare const MiddleTruncate: React.ForwardRefExoticComponent<Omit<MiddleTruncateProps, "ref"> & React.RefAttributes<HTMLDivElement>>;

interface ShowMoreProps extends Omit<TruncateProps, 'width' | 'middle' | 'end' | 'ellipsis'> {
    /**
     * The label to display in the anchor element to show more
     *
     * If a valid React element is passed in,
     * the built-in anchor element will not be rendered,
     * and the React element will be rendered directly.
     * (checked by `React.isValidElement` ).
     *
     * @since v0.4.0 supported React element
     */
    more?: React.ReactNode;
    /**
     * The label to display in the anchor element to show less
     *
     * If a valid React element is passed in,
     * the built-in anchor element will not be rendered,
     * and the React element will be rendered directly.
     * (checked by `React.isValidElement` ).
     *
     * @since v0.4.0 supported React element
     */
    less?: React.ReactNode;
    /**
     * Class name(s) to add to the anchor elements,
     * only valid for built-in anchor element,
     */
    anchorClass?: string;
    /**
     * This callback function will be triggered
     * when the component toggles the expanded/collapsed state.
     *
     * @param expanded - Current expand status
     *
     * @since v0.4.0
     */
    onToggle?: (expanded: boolean) => void;
}
/**
 * If use custom React elements, You can use the `toggleLines`
 * method to toggle between expand and collapse.
 * This is the type of this method.
 *
 * @since v0.4.0
 */
type ShowMoreToggleLinesFn = (e: React.MouseEvent<HTMLSpanElement, MouseEvent>) => void;
/**
 * If use custom React elements for the `more` / `less` props,
 * you can bind the Ref value to the `<ShowMore />` component
 * and receive the `toggleLines` method through ref.
 *
 * @since v0.4.0
 */
type ShowMoreRef = {
    toggleLines: ShowMoreToggleLinesFn;
};

declare const ShowMore: React.ForwardRefExoticComponent<Omit<ShowMoreProps, "ref"> & React.RefAttributes<ShowMoreRef>>;

export { MiddleTruncate, type MiddleTruncateProps, ShowMore, type ShowMoreProps, type ShowMoreRef, type ShowMoreToggleLinesFn, Truncate, type TruncateProps };
