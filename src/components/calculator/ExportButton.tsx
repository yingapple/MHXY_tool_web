'use client';

import { useRef } from 'react';
import html2canvas from 'html2canvas';

interface ExportButtonProps {
  targetRef: React.RefObject<HTMLDivElement | null>;
}

export default function ExportButton({ targetRef }: ExportButtonProps) {
  const handleExport = async () => {
    if (!targetRef.current) return;

    try {
      // Create a clone of the element to add watermark
      const clonedElement = targetRef.current.cloneNode(true) as HTMLElement;

      // Create watermark
      const watermark = document.createElement('div');
      watermark.style.cssText = `
        position: absolute;
        bottom: 20px;
        right: 20px;
        padding: 12px 20px;
        background: linear-gradient(135deg, rgba(251, 191, 36, 0.95), rgba(245, 158, 11, 0.95));
        border-radius: 12px;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        z-index: 1000;
      `;
      watermark.innerHTML = `
        <div style="display: flex; align-items: center; gap: 8px;">
          <span style="font-size: 20px;">🎲</span>
          <div>
            <div style="font-size: 14px; font-weight: 600; color: #78350f;">梦幻西游炼妖助手</div>
            <div style="font-size: 12px; color: #92400e;">mhxy-helper.com</div>
          </div>
        </div>
      `;

      // Create container for export
      const container = document.createElement('div');
      container.style.cssText = `
        position: fixed;
        left: -9999px;
        top: 0;
        background: linear-gradient(to bottom, #fffbeb, #fed7aa);
        padding: 40px;
        border-radius: 16px;
      `;

      // Make the cloned element relative for watermark positioning
      clonedElement.style.position = 'relative';
      clonedElement.style.padding = '20px';

      container.appendChild(clonedElement);
      container.appendChild(watermark);
      document.body.appendChild(container);

      // Generate canvas
      const canvas = await html2canvas(container, {
        backgroundColor: '#fffbeb',
        scale: 2, // Higher quality
        logging: false,
        useCORS: true,
      });

      // Clean up
      document.body.removeChild(container);

      // Download image
      const link = document.createElement('a');
      const timestamp = new Date().toISOString().slice(0, 10);
      link.download = `炼妖计算结果-${timestamp}.png`;
      link.href = canvas.toDataURL('image/png');
      link.click();
    } catch (error) {
      console.error('导出失败:', error);
      alert('导出失败，请重试');
    }
  };

  return (
    <button
      onClick={handleExport}
      className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-200"
    >
      <svg
        className="w-5 h-5"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
        />
      </svg>
      <span>导出图片分享</span>
    </button>
  );
}
