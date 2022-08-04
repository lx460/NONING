package com.fivenonjangi.noning.data.entity.user;

import com.fivenonjangi.noning.data.dto.user.FollowDTO;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Entity
@Getter
@NoArgsConstructor
@AllArgsConstructor
@Builder
@Table(name = "follow")
public class Follow {
    @Id
    @Column(name = "follow_id")
    long id;
    @ManyToOne
    @JoinColumn(name = "from_user_id")
    User fromUser;
    @ManyToOne
    @JoinColumn(name = "to_user_id")
    User toUser;

    public void setFromUser(User fromUser) {
        this.fromUser = fromUser;
    }

    public void setToUser(User toUser) {
        this.toUser = toUser;
    }

    public FollowDTO toDto() {
        return FollowDTO.builder()
                .id(id)
                .fromUser(fromUser.toDto())
                .toUser(toUser.toDto())
                .build();
    }
}