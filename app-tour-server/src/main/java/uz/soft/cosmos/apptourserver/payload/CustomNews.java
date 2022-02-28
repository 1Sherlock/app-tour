package uz.soft.cosmos.apptourserver.payload;

import java.sql.Timestamp;
import java.util.UUID;

public interface CustomNews {
    UUID getId();

    Timestamp getCreatedAt();

    String getDescriptionEn();

    String getDescriptionRu();

    String getDescriptionUz();

    String getShortDescEn();

    String getShortDescRu();

    String getShortDescUz();

    String getTitle();

    String getUrl();

    UserInfo getCreatedBy();

    AttachmentInfo getPhoto();

    interface UserInfo {
        String getFirstName();

        String getLastName();
    }

    interface AttachmentInfo {
        UUID getId();
    }
}
